// Helper function for binding object event handlers, for passing to components
function bindEventHandlers(thisArg, classPrototype, handlerPrefix = /^handle[A-Z]/) {
	// Get property keys for prototype
	let keys = Reflect.ownKeys(classPrototype)
	
	// Bind each matching object function to object
	keys.forEach(func => {
		if (handlerPrefix.test(func)) {
			thisArg[func] = thisArg[func].bind(thisArg)
		}
	})
}

export { bindEventHandlers as eventHandlers }