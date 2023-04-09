import re

# open the HTML file for reading
with open("index.html", "r") as file:
    html = file.read()

# use regex to find and remove all occurrences of {{ }}
html = re.sub(r"\{\{.*?\}\}", "", html)

# save the modified HTML to a new file
with open("modified_file.html", "w") as file:
    file.write(html)
