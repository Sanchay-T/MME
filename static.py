import re

# Define the regular expression pattern to match the {{ }} brackets and their contents
pattern = re.compile(r"{{.*?}}")

# Read the contents of the HTML file
with open("index.html", "r") as f:
    contents = f.read()

# Remove all occurrences of the {{ }} brackets and their contents
new_contents = re.sub(pattern, "", contents)

# Write the updated contents to the HTML file
with open("index.html", "w") as f:
    f.write(new_contents)
