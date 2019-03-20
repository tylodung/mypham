#!/usr/bin/env bash
set -e

function find_latest_version() {
    local -r version_patern='^v{1}[[:digit:]]+[.]{1}[[:digit:]]+[.]{1}[[:digit:]]+$'
    local -r versions=$(git tag -l | grep -E "$version_patern")
    local -r latest_version=$(echo "$versions" \
                              | sort -rn -t . -k 1,1 -k 2,2 -k 3,3 \
                              | head -n 1)

    echo "$latest_version"
}

if ! command -v git > /dev/null; then
    echo "You must have Git installed to run this script."
    echo "If you already have Git installed, make sure it's in your path."
    exit 1
fi

NVM_DIR="$HOME"/.nvm
if ! [ -d "$NVM_DIR" ]; then
    git clone https://github.com/creationix/nvm.git "$NVM_DIR" > /dev/null 2>&1
    cd "$NVM_DIR"
elif ! [ -d "$NVM_DIR"/.git ]; then
    echo "Project directory $NVM_DIR exists, but it isn't a valid Git repo"
    exit 1
else
    cd "$NVM_DIR"
    current_version=$(find_latest_version)
    {
    git checkout master
    git fetch
    } > /dev/null 2>&1
fi

latest_version=$(find_latest_version)

git checkout "$latest_version" > /dev/null 2>&1

if [ "$current_version" != "$latest_version" ]; then
    echo "nvm version $latest_version activated"
else
    echo "nvm version $current_version is already the latest version"
    echo "No update is needed"
fi

if ! grep NVM_DIR "$HOME"/.bashrc > /dev/null; then
    echo "Updating bashrc..."
    {
    echo
    echo 'export NVM_DIR="$HOME/.nvm"'
    echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"'
    echo '[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"'
    } >> "$HOME"/.bashrc
    echo "Please start a new bash session before using nvm"
    echo "Alternatively, if you want to continue to use this bash session, run \"source $HOME/.bashrc\""
fi
