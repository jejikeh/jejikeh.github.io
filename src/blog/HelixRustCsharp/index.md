---
title: Helix, Rust, C#
pageTitle: helix
layout: "post.njk"
tags: ["post"]
---

Helix is a postmodern text editor that is very similar to vim, but written in Rust and has more convenient shortcuts.

<!-- excerpt -->

# Helix, Rust, C#

[Helix](https://helix-editor.com/) is a postmodern text editor that is very similar to vim, but written in Rust and has more convenient shortcuts.

## Install Helix

To assemble the Helix yourself, you need to do the following in the terminal:

```bash
git clone https://github.com/helix-editor/helix
cd helix
cargo install --path helix-term
```

This is only the editor itself to install, it still needs to install language support. To check the Helix status, insert the following into the terminal:

```bash
hx --health

# build tree-sitter grammars
hx --grammar fetch
hx --grammar build
```

These commands will install the necessary files in the runtime folder so that helix can access it, copy its contents to `%AppData%/helix/runtime`

## Install OmniSharp

OmniSharp is a .NET development platform based on [Roslyn](https://github.com/dotnet/roslyn)
 workspaces. It provides project dependencies and C# language services to various IDEs and plugins.

To install Omnisharp you need to download binaries for your system: [Release](https://github.com/OmniSharp/omnisharp-roslyn/releases/tag/v1.39.1), and then add binaries to your system path.

## Install rust-analyzer

At its core, rust-analyzer is a **library** for semantic analysis of Rust code as it changes over time. This manual focuses on a specific usage of the library — running it as part of a server that implements the [Language Server Protocol](https://microsoft.github.io/language-server-protocol/)(LSP). The LSP allows various code editors, like VS Code, Emacs or Vim, to implement semantic features like completion or goto definition by talking to an external language server process.

Build from source:

```bash
git clone https://github.com/rust-lang/rust-analyzer.git
cd rust-analyzer
cargo xtask install --server
```

Now you can run `hx`.
