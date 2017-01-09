var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECERET_ID";
var param = "?client_id="+id+"&client_secret="+sec;

function getUserInfo(username) {
	return axios.get('http://www.omdbapi.com/?y=&plot=short&r=json&tomatoes=true&t='+username)
}

function getImbdRatings(username) {
	return username.map(function(user) {
		return user.imdbRating
	})
}

function getTomatoeRatings(username) {
	return username.map(function(user) {
		return user.tomatoRating
	})
}

var helpers = {
	getPlayersInfo: function(players) {
		return axios.all(players.map(function(username) { 
			return getUserInfo(username)
		})).then(function(info){
			return info.map(function(user) {
				return user.data;
			})
		}).catch(function(err) {
			console.warn("Error in getPlayerInfo", err)
		})
	},
	battle: function(players) {
		var playerOneScore = parseInt(getImbdRatings(players)[0]) + parseInt(getTomatoeRatings(players)[0])
		var playerTwoScore = parseInt(getImbdRatings(players)[1]) + parseInt(getTomatoeRatings(players)[1])
		var scores = [playerOneScore, playerTwoScore]
		return scores;
	}
}

module.exports = helpers;