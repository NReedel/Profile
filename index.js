window.addEventListener('load',() =>{
	// Function to generate a unique identifier
	function generateUniqueId() {
		return 'user_' + Math.random().toString(36).substr(2, 9);
	}

	// Key for local storage
	const VISITOR_KEY = 'visitor_count';
	const USER_ID_KEY = 'user_id';

	// Check if the user has already been assigned an ID
	let userId = localStorage.getItem(USER_ID_KEY);

	if (!userId) {
		// User doesn't have an ID, generate and store a new one
		userId = generateUniqueId();
		localStorage.setItem(USER_ID_KEY, userId);

		// Retrieve current visitor count
		let visitorCount = parseInt(localStorage.getItem(VISITOR_KEY)) || 0;
		
		// Increment and store the new visitor count
		visitorCount += 1;
		localStorage.setItem(VISITOR_KEY, visitorCount);

		// Log the visitor count to the console
		console.log('Unique Visitors:', visitorCount);
	} else {
		// User has already been assigned an ID, do not increment the count
		console.log('Unique Visitors:', localStorage.getItem(VISITOR_KEY));
	}
});
