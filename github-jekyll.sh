#!/bin/sh
set -e

echo "Installing openssl"
sudo gem install openssl -v '3.1.0' --source 'https://rubygems.org/'
sudo gem install bundler jekyll
echo "Gems installed"

echo "Installing gems"
bundle config path vendor/bundle
bundle install
echo "Gems installed"

echo "Jekyll building"
bundle exec jekyll build
echo "Jekyll build done"
