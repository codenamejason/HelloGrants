# HelloGrants

![CI](https://github.com/codenamejason/HelloGrants/workflows/HelloGrants/badge.svg)


## Getting Started

This is a starter kit to build a grant appliation with Allo Protocol. It is built using
[Spec](https://spec.dev), [Bun](https://bun.sh/) and
[Next.js](https://nextjs.org/).

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18.x.x)
- [Bun](https://bun.sh/) (v1.x)

You can get a free [Pinata](https://pinata.cloud/) account to use for IPFS.

- Add env vars:

Required
```
NEXT_PUBLIC_IPFS_READ_GATEWAY=
NEXT_PUBLIC_PINATA_JWT=
NEXT_PUBLIC_IPFS_READ_GATEWAY=
NEXT_PUBLIC_IPFS_WRITE_GATEWAY=
NEXT_PUBLIC_ENVIRONMENT=
ALCHEMY_ID=
INFURA_ID=
NEXT_PUBLIC_GRAPHQL_URL=
```

### Installation

```bash
# Install dependencies
bun install
```

### Development

```bash
# Start the development server
bun dev
```

### Testing

TBD 🤔

### Linting

```bash
# Lint the application
bun lint
```

### Production

```bash
# Build the application
bun build

# Start the production server
bun start
```
