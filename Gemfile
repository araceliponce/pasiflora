source 'https://rubygems.org'
#gem 'jekyll'

group :jekyll_plugins do
  gem 'github-pages'
  gem "jekyll-feed", "~> 0.12"
  gem 'jekyll-paginate'
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1"

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

 # Yikes! It looks like you don't have kramdown-parser-gfm or one of its dependencies installed
gem "kramdown-parser-gfm"
gem "kramdown-syntax-coderay"

# ... cannot load such file -- webrick (LoadError)
gem "webrick"



