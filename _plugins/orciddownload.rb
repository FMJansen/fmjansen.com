require 'open-uri'

module Jekyll

	class OrcidDownloader < Generator
		safe true

		def generate(site)
			orcid_id = site.config["orcid_id"]

			Jekyll.logger.info "Downloading Orcid data"

			if orcid_id
				url = "https://orcid.org/#{orcid_id}/worksExtendedPage.json?offset=0&sort=date&sortAsc=false&pageSize=50"
				File.open(File.join(site.config["source"], '_data/orcid.json'), 'w') do |f|
					f.write(URI.open(url).read)
				end
			end
		end

	end

end
