#!/bin/bash

echo "Checking SSL certificates for both domains..."
echo ""
echo "=== reelmatch.app ==="
echo | openssl s_client -servername reelmatch.app -connect reelmatch.app:443 2>/dev/null | openssl x509 -noout -subject -issuer -dates -ext subjectAltName 2>/dev/null

echo ""
echo "=== www.reelmatch.app ==="
echo | openssl s_client -servername www.reelmatch.app -connect www.reelmatch.app:443 2>/dev/null | openssl x509 -noout -subject -issuer -dates -ext subjectAltName 2>/dev/null

echo ""
echo "=== DNS Check ==="
echo "www.reelmatch.app A records:"
dig +short www.reelmatch.app A

