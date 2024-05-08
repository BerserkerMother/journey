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

# Create an empty array to store file names without directory paths
file_names=()

# Extract file names without directory paths using basename
for file in "${files[@]}"; do
    file_names+=("$(basename "$file")")
done

# Convert the array of file names to JSON format
json=$(printf '%s\n' "${file_names[@]}" | jq -R . | jq -s .)

# Write the JSON array to the output file
echo "$json" > "$output_json"

echo "JSON file generated successfully: $output_json"

