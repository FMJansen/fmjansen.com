module Jekyll
	class OGFilter < Liquid::Tag

		def initialize(tag_name, text, tokens)
			super
		end

		def render(context)

			id = context["page"]["title"]

			# Check if the file already exists, return early if it does
			if(File.exist?("#{Dir.pwd}/src/og/#{id}.png"))
				puts "File exists #{Dir.pwd}/src/og/#{id}.png}"
			else
				if(context["page"]["type"] == "post")
					script = "node #{Dir.pwd}/ogimages.js '#{context["page"]["title"]}' '#{context["page"]["date"].strftime("%e %B %Y")}, Floris Jansen' '#{Dir.pwd}/src/og/#{id}.png'"
				else
					script = "node #{Dir.pwd}/ogimages.js '#{context["page"]["title"]}' 'fmjansen.com' '#{Dir.pwd}/src/og/#{id}.png'"
				end
				system(script)
				puts script
			end

			# Get the site varsiable
			# site = context.registers[:site]
			# site.static_files << Jekyll::StaticFile.new(site, site.source, "/static/og/", "#{id}.png")
			"/static/og/#{id}.png"

		end

	end
end
Liquid::Template.register_tag('og_filter', Jekyll::OGFilter)
