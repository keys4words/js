var Track = function(params){
	this.name = params.name;
	this.url = params.url;
	/* this.playTrack = function(){
		console.log('We started playing', this.name);
	}; */
};

Track.prototype.playTrack = function(){
		console.log('We started playing', this.name);
	};
	
var YoutubeTrack = function(params){
	Track.apply(this, arguments);
	this.image = params.image;
};

var track1 = new Track({
	name: 'track01',
	url: 'track01.mp3'
});
var track2 = new Track({
	name: 'track02',
	url: 'track02.mp3'
});

var youtubeTrack1 = new YoutubeTrack({
	name: 'youtubeTrack1',
	url: 'youtubeTrack1.mp4',
	image: 'track01.jpg'
});

var youtubeTrack2 = new YoutubeTrack({
	name: 'youtubeTrack2',
	url: 'youtubeTrack2.mp4',
	image: 'track02.jpg'
});

console.log(youtubeTrack1);
console.log(youtubeTrack2);

youtubeTrack1.playTrack();