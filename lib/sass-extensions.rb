module SassExtensions
	def capitalize_first_letter(x)
		s = x.to_s
		if s.length > 0
			s[0] = s.capitalize[0]
		end
		Sass::Script::String.new(s)
	end
end

module Sass::Script::Functions
	include SassExtensions
end