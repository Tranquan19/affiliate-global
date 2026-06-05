import urllib.request, re

# Check homepage
url = "https://tranquan19.github.io/affiliate-global/"
with urllib.request.urlopen(url) as f:
    html = f.read().decode('utf-8')

# Check for product image link
if '<a href="pages/product.html?id=' in html:
    print("✓ Product image link found in HTML template")
else:
    print("✗ Product image link NOT found in HTML template")

# Check script
scripts = re.findall(r'<script>(.*?)</script>', html, re.DOTALL)
for js in scripts:
    if 'product-img' in js and 'href' in js:
        print("✓ Product image with href found in JS")
        break
else:
    print("✗ Product image with href NOT found in JS")

# Check number of hardcoded products
for js in scripts:
    if 'PRODUCTS' in js:
        count = js.count('{id:')
        print(f"Products in JS: {count}")
        break

# Check deals page
url2 = "https://tranquan19.github.io/affiliate-global/pages/deals.html"
with urllib.request.urlopen(url2) as f:
    html2 = f.read().decode('utf-8')

scripts2 = re.findall(r'<script>(.*?)</script>', html2, re.DOTALL)
for js in scripts2:
    if 'PRODUCTS' in js or 'products' in js:
        count = js.count('{id:')
        print(f"Deals page products: {count}")
        break

print("\n✓ All checks complete")
