import urllib.request, re, json

url = "https://tranquan19.github.io/affiliate-global/pages/admin.html"
with urllib.request.urlopen(url) as f:
    html = f.read().decode('utf-8')

scripts = re.findall(r'<script>(.*?)</script>', html, re.DOTALL)
print(f"Script blocks: {len(scripts)}")

if scripts:
    js = scripts[0]
    # Check braces
    opens = js.count('{') + js.count('(') + js.count('[')
    closes = js.count('}') + js.count(')') + js.count(']')
    print(f"Braces: {opens} open, {closes} close, diff: {opens-closes}")
    
    # Check key items
    for term in ['function edit', 'function del', 'function render', 'function sc', 
                 'onsubmit', '.onclick', 'forEach', 'pwd', 'admin123']:
        count = js.count(term)
        if count > 0:
            print(f"  '{term}': {count}")
    
    # Check for password
    pwd_idx = js.find('pwd')
    if pwd_idx >= 0:
        print(f"\nNear 'pwd': {js[pwd_idx:pwd_idx+30]}")
    
    print(f"\nScript size: {len(js)} chars")
else:
    print("No script found!")
