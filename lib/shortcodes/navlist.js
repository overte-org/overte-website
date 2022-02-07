// generates a page navigation list
const listType = "ul",
	elementActive = "is--active";

// pass in collections.all | eleventyNavigation, (current) page, and maximum depth level
module.exports = (pageNav, page, maxLevel = 999) => {
	function navRecurse(entry, level = 1) {
		let childPages = "";

		if (level < maxLevel) {
			for (let child of entry.children) {
				childPages += navRecurse(child, level++);
			}
		}

		let active = entry.url === page.url,
			classList = [];

		return (
			"<a href='" + entry.url + "'>" +
			(active ? `<li class="navigation--item ${elementActive}">` : `<li class="navigation--item">`) +
			entry.title +
			"</li></a>" +
			(childPages ? `${childPages}` : "")
		);
	}

	let nav = "";
	for (let entry of pageNav) {
		nav += navRecurse(entry);
	}

	return `<${listType} class="navigation--items">${nav}</${listType}>`;
};
