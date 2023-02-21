clean:
	rm -rfv ./node_modules
	rm -rfv ./*/node_modules
	rm -rfv ./*/*/node_modules
	rm -rfv ./*/*/*/node_modules
	rm -rfv ./*/*/*/*/node_modules

	rm -rfv ./dist
	rm -rfv ./*/dist
	rm -rfv ./*/*/dist
	rm -rfv ./*/*/*/dist
	rm -rfv ./*/*/*/*/dist