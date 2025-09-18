Steps to Add Snippets Using VSCode User Snippets UI

Open VSCode.

Open Command Palette:

On Windows/Linux: Ctrl + Shift + P

On macOS: Cmd + Shift + P

Search for Preferences: Configure User Snippets.

This will open the User Snippets configuration options in VSCode.

Select the Language for Snippets:

If you want to create TypeScript snippets, search for typescript.json. This will open the typescript.json file, where you can define TypeScript snippets.

Alternatively, you can also create a global snippet file by selecting New Global Snippets File, which will be available for all file types.

Add Your Snippets:

In the typescript.json (or global snippets file), copy the snippets from your combined-snippets.json and paste them directly into the opened file.

Here’s what you should do:

Example:

Your combined-snippets.json contains snippets like:

{
  "useState Hook": {
    "prefix": "useState",
    "body": [
      "const [${1:state}, ${2:setState}] = useState(${3:initialValue});"
    ],
    "description": "Creates a state variable with useState hook"
  },
  "useEffect Hook": {
    "prefix": "useEffect",
    "body": [
      "useEffect(() => {",
      "  ${1:// effect logic}",
      "}, [${2:dependencies}]);"
    ],
    "description": "useEffect hook with dependencies"
  }
}


Paste the Snippets into the typescript.json:

For example:

{
  "useState Hook": {
    "prefix": "useState",
    "body": [
      "const [${1:state}, ${2:setState}] = useState(${3:initialValue});"
    ],
    "description": "Creates a state variable with useState hook"
  },
  "useEffect Hook": {
    "prefix": "useEffect",
    "body": [
      "useEffect(() => {",
      "  ${1:// effect logic}",
      "}, [${2:dependencies}]);"
    ],
    "description": "useEffect hook with dependencies"
  }
}


Once you paste your snippets into the file, save the file (Ctrl + S or Cmd + S).

Step 6: Use the Snippets

Now, when you create or edit a TypeScript file (*.ts or *.tsx), you should be able to trigger the snippets by typing their prefix (e.g., useState) and pressing Tab.

For example:

Type useState and press Tab to expand the useState Hook snippet.

Type useEffect and press Tab to expand the useEffect Hook snippet.