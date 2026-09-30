import requests
import json

url = "https://api.rss2json.com/v1/api.json?rss_url=https://e00-marca.uecdn.es/rss/futbol/laliga.xml"
r = requests.get(url)
data = r.json()

noticias = []
for item in data.get('items', [])[:6]:
    noticias.append({
        "titulo": item['title'],
        "resumen": item['description'][:120] + "...",
        "link": item['link'],
        "fuente": "MARCA"
    })

with open('noticias.json', 'w', encoding='utf-8') as f:
    json.dump(noticias, f, ensure_ascii=False, indent=2)
