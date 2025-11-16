import os
from jinja2 import Environment, FileSystemLoader, select_autoescape
from datetime import datetime, timezone
import utility

TEMPLATE_PATH = "templates"
LAYOUT_PATH = "page-generation/page-layout.json"

def render_page(env, page):
    template = env.get_template( page.get("file"))
    output_html = template.render(
        generated_at=datetime.now(timezone.utc).timestamp(),
        page=page,
    )
    # Write output
    if os.path.dirname(page.get("file")):
        os.makedirs(os.path.dirname(page.get("file")), exist_ok=True)
    with open(page.get("file"), "w", encoding="utf-8") as f:
        f.write(output_html)
    print(f"Generated {page.get('file')}")

def main():
    env = Environment(
        loader=FileSystemLoader(TEMPLATE_PATH),
        autoescape=select_autoescape(["html", "xml"]),
    )

    page_layout = utility.load_json(LAYOUT_PATH)

    for page in page_layout.get("pages", []):
        print(f"Generating page: {page}")
        render_page(env, page)

if __name__ == "__main__":
    main()
