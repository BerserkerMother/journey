use std::fs;

use wasm_game_of_life::parse;

fn main() {
    let content = fs::read_to_string("test_blog.md").unwrap();
    let parsed_html = parse(content.as_str());
    fs::write("test.html", parsed_html).unwrap();
}
