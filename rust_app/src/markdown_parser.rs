use pulldown_cmark::{Options, Parser};
use wasm_bindgen::prelude::*;
#[wasm_bindgen]
pub fn parse(content: &str) -> String {
    // Set up options and parser. Strikethroughs are not part of the CommonMark standard
    // and we therefore must enable it explicitly.
    let mut options = Options::empty();
    options.insert(Options::ENABLE_STRIKETHROUGH);
    let parser = Parser::new_ext(content, options);

    // Write to String buffer.
    let mut html_output = String::new();
    pulldown_cmark::html::push_html(&mut html_output, parser);
    html_output
    //     format!(
    //         r#"
    // <!DOCTYPE html>
    // <html lang="en">
    // <head>
    //     <meta charset="UTF-8">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <title>How to Download a PDF File Using Python</title>
    //     <link rel="stylesheet" href="test.css">
    // </head>
    // <body>
    //     <div class="blog-post">{html_output}</div></body>"#
    //     )
}
