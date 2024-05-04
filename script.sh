#!/bin/bash

# Check if the 'roadside' process is running
PID=$(sudo pm2 pid roadside)

# If the PID is greater than 0, the process is running
if [[ $PID -gt 0 ]]; then
    echo "Roadside process is running. Restarting..."
    sudo pm2  restart roadside
else
    echo "Roadside process is not running. Starting..."
    sudo pm2  start roadside.sh
fi
