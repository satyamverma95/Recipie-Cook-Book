import requests
from recipe_scrapers import scrape_html

##https://pypi.org/project/recipe-scrapers/

url = "https://www.indianhealthyrecipes.com/paneer-butter-masala-restaurant-style/"
html = requests.get(url).content

scraper = scrape_html(html=html, org_url=url)

print(scraper.title())
print(scraper.total_time())
print(scraper.ingredients())
print(scraper.instructions())
