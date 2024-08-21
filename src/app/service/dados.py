import requests
import json
import os
import time
from datetime import datetime

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
                    ficha_data.append(response.json())
                    print(f"Sucesso ao obter dados para indicador {indicador}")
                    success = True
                else:
                    print(f"Erro {response.status_code} ao obter dados para indicador {indicador}")
                time.sleep(1)  # Espera 1 segundo entre as tentativas
            except Exception as e:
                print(f"Erro ao conectar ao indicador {indicador}: {e}")
            attempts += 1
    
    return ficha_data

# Etapa 3: Salvar os dados no arquivo JSON dentro da estrutura especificada
def save_to_json(data):
    # Define o caminho relativo ao local onde o script está sendo executado
    filepath = os.path.join(os.path.dirname(__file__), '../../assets/json/data.json')

    os.makedirs(os.path.dirname(filepath), exist_ok=True)  # Cria os diretórios se não existirem

    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as file:
            existing_data = json.load(file)
            data.extend(existing_data)  # Adiciona os novos dados ao final do JSON existente
    
    with open(filepath, 'w', encoding='utf-8') as json_file:
        json.dump(data, json_file, indent=4, ensure_ascii=False)
    print(f"Dados salvos em {filepath}")

if __name__ == "__main__":
    print(f"Script iniciado em {datetime.now()}")
    indicadores = get_indicadores()
    ficha_data = get_ficha_indicadores(indicadores)
    save_to_json(ficha_data)
    print(f"Script finalizado em {datetime.now()}")