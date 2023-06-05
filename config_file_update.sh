#!/bin/bash

file="/node_modules/@auth0/nextjs-auth0/dist/auth0-session/handlers/callback.js"
temp_file="/tmp/callback.js"

# Comment out the original line and add the new line
sed 's/^.*\(Location: res.getHeader('"'"'Location'"'"') || openidState.returnTo || config.baseURL\).*$/\/\/ \1\nLocation: process.env.redirect_uri/' "$file" > "$temp_file"

# Replace the original file with the modified file
mv "$temp_file" "$file"

echo "Modification completed." 



