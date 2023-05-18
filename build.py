import os
from bs4 import BeautifulSoup

directory = 'out'

# Iterate over all HTML files in the directory
for filename in os.listdir(directory):
    if filename.endswith('.html'):
        print(f"Fixing {filename}")
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r') as file:
            # Read the file content
            content = file.read()

        # Parse the HTML content
        soup = BeautifulSoup(content, 'html.parser')

        # Find all <link> tags with an href attribute
        link_tags = soup.find_all(['link', 'script', 'img'], src=True)
        for link in link_tags:
            src = link['src']
            if not src.startswith('.'):
                link['src'] = '.' + src

        link_tags = soup.find_all(['link', 'script', 'img'], href=True)
        for link in link_tags:
            href = link['href']
            if not href.startswith('.'):
                link['href'] = '.' + href

        # Write the modified content back to the file
        with open(filepath, 'w') as file:
            file.write(str(soup))

print("Success!")
