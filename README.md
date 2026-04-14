# LinkedPush CLI

Schedule and publish LinkedIn posts from your terminal. Connects to [LinkedPush](https://linkedpush.seonavigatorplus.com).

## Install

```bash
npm install -g linkedpush
```

Or clone and link locally:

```bash
git clone https://github.com/Lnguyen1996/linkedpush-cli.git
cd linkedpush-cli
npm install
npm link
```

## Setup

```bash
# Login via LinkedIn OAuth (opens browser)
linkedpush auth login

# Set your session token
export LINKEDPUSH_SESSION=<token from login output>

# Verify
linkedpush auth me
```

## Usage

```bash
# Create a draft post
linkedpush posts create --title "My post" --content "Hello LinkedIn!"

# List your posts
linkedpush posts list

# Publish a post immediately
linkedpush posts publish <post-id>

# Schedule a post
linkedpush posts create --title "Scheduled post" --content "Going live tomorrow" --schedule "2026-04-15T09:00:00Z"
```

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `LINKEDPUSH_URL` | `https://linkedpush.seonavigatorplus.com` | API server URL |
| `LINKEDPUSH_SESSION` | (none) | Session token from `auth login` |

## License

MIT
