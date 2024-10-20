# Add node script as gloabl cmd

This guide explains how to make your JavaScript script executable from anywhere in the Fish shell.

## Steps

1. **Make the Script Executable**

   Run the following command to make your script executable:

   ```javascript
   chmod +x your_script.js
   ```

2. **Move the Script to the Bin Directory**

   Move your script to the bin directory so that it can be accessed globally:

   ```javascript
   mv your_script.js /usr/local/bin/
    ```

3. **Source the CLI Configuration**

   Finally, apply the changes to your Fish shell configuration:

   ```javascript
   source ~/.config/fish/config.fish
   ```

Now your JavaScript script should be executable from anywhere in the Fish shell!
EOL
