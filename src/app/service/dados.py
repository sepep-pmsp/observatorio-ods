import requests
import json
import os
import time
from datetime import datetime
from collections import defaultdict

# Etapa 1: Obter os cd_indicador da primeira URL
def get_indicadores():
    url = "https://api.observasampa.prefeitura.sp.gov.br/v1/basic/indicadores/?nm_tema=ODS%20S%C3%A3o%20Paulo"
    response = requests.get(url)
    data = response.json()
    indicadores = [item['cd_indicador'] for item in data]
    return indicadores

# Etapa 2: Obter os dados dos indicadores usando as URLs secundárias
def get_ficha_indicadores(indicadores):
    ficha_data = []
    base_url = "https://api.observasampa.prefeitura.sp.gov.br/v1/front_end/ficha_indicador/"
    
    for indicador in indicadores:
        url = f"{base_url}{indicador}"
        success = False
        attempts = 0

        while not success and attempts < 3:  # Tentar 3 vezes se falhar
            try:
                response = requests.get(url)
                if response.status_code == 200:
                    data = response.json()
                    # Separar nm_indicador e name_indicador
                    if 'nm_indicador' in data:
                        parts = data['nm_indicador'].split(' ', 1)
                        data['nm_indicador'] = parts[0]
                        data['name_indicador'] = parts[1] if len(parts) > 1 else ''
                    ficha_data.append(data)
                    print(f"Sucesso ao obter dados para indicador {indicador}")
                    success = True
                else:
                    print(f"Erro {response.status_code} ao obter dados para indicador {indicador}")
                time.sleep(1)  # Espera 1 segundo entre as tentativas
            except Exception as e:
                print(f"Erro ao conectar ao indicador {indicador}: {e}")
            attempts += 1
    
    return ficha_data

# Etapa 3: Organizar os indicadores por grupo de forma crescente
def organize_indicators(data):
    organized_data = defaultdict(list)
    
    for item in data:
        indicador_group = item['nm_indicador'].split('.')[0]  # Obtém o primeiro grupo, ex: "01"
        organized_data[indicador_group].append(item)
    
    # Ordena os indicadores dentro de cada grupo de forma crescente
    for key in organized_data:
        organized_data[key] = sorted(organized_data[key], key=lambda x: x['nm_indicador'])
    
    # Ordena as chaves dos grupos de forma crescente
    sorted_organized_data = dict(sorted(organized_data.items()))
    
    return sorted_organized_data

# Etapa 4: Salvar os dados no arquivo JSON no caminho relativo especificado
def save_to_json(data):
    filepath = os.path.join(os.path.dirname(__file__), '../../assets/json/data.json')

    os.makedirs(os.path.dirname(filepath), exist_ok=True)  # Cria os diretórios se não existirem

    with open(filepath, 'w', encoding='utf-8') as json_file:
        json.dump(data, json_file, indent=4, ensure_ascii=False)
    print(f"Dados salvos em {filepath}")


def rodar():

    print(f"Script iniciado em {datetime.now()}")
    indicadores = get_indicadores()
    ficha_data = get_ficha_indicadores(indicadores)
    organized_data = organize_indicators(ficha_data)
    save_to_json(organized_data)
    last_rodou = time.time()
    print(f"Script finalizado em {datetime.now()}")


if __name__ == "__main__":

    import time

    #vai rodar de 12 hora em 12 hora
    DELAY_SECS = 60*60*12
    #DELAY_SECS=5

    last_rodou = 0
    rodou_uma_vez = False
    while True:

        #vai entrar aqui soh na primeira vez que rodar noi deploy
        if not rodou_uma_vez:
            rodar()
            last_rodou=time.time()
            rodou_uma_vez=True

        agora = time.time()
        tempo_ultima_rodada = agora - last_rodou
        if tempo_ultima_rodada > DELAY_SECS:
            rodar()
            last_rodou=time.time()

            