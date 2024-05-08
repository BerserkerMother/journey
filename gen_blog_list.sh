#!/bin/bash

# Define the directory containing the .md files
directory="blogs/"

# Define the output JSON file
output_json="public/list.json"

# List .md files in the directory and save them to an array
files=("$directory"/*.md)

# Check if there are any .md files in the directory
if [ ${#files[@]} -eq 0 ]; then
    echo "No .md files found in the directory."
    exit 1
fi

# Create the JSON array
json='['
for file in "${files[@]}"; do
    # Append each file to the JSON array
    json+="\"$file\","
done
# Remove the trailing comma
json="${json%,}"
json+=']'

# Write the JSON array to the output file
echo "$json" > "$output_json"

echo "JSON file generated successfully: $output_json"

