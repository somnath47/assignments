var tskMsg = document.getElementById("taskrunner-msg");
tskMsg.innerHTML = "";
let tasks = function (){

	this.task1 = (argsArr) => {
		console.log("Inside task 1 | Arguments supplied: " + argsArr);
		tskMsg.innerHTML += "Inside task 1 | Arguments supplied: " + argsArr + "</br>";
		return;
	}

	this.task2 = (argsArr) => {
		console.log("Inside task 2 | Arguments supplied: " + argsArr);
		tskMsg.innerHTML += "Inside task 2 | Arguments supplied: " + argsArr + "</br>";
		return;
	}

	this.task3 = (argsArr) => {
		console.log("Inside task 3 | Arguments supplied: " + argsArr);
		tskMsg.innerHTML += "Inside task 3 | Arguments supplied: " + argsArr + "</br>";
		return;
	}
};

let TaskRunner = function (_task, _time) {

	var current_time;
	var timer_stop;

	this.start = function (){
		tskMsg.innerHTML += "Task Runner Started for " + (_time / 1000) + " sec </br>";

		let argsArr = this.getArgs(arguments);
		current_time = Date.now();
		timer_stop = current_time + _time;

		var interVal = setInterval(function(){
			_task(argsArr);
			
			current_time = Date.now();
			if(current_time > timer_stop) clearInterval(interVal);

		}, 1000);

	};

	this.reset = (_rtime) => {
		current_time = Date.now();
		timer_stop = current_time + _rtime;
		tskMsg.innerHTML = "";
		tskMsg.innerHTML += "Task Runner Reset to " + (_rtime / 1000) + " sec </br>";
	};

	this.stop = () => {
		timer_stop = Date.now();
		tskMsg.innerHTML += "Task Stopped </br>";
	}

	this.getArgs = function (arguments){
		let retArr = [];
		for (let args of arguments) 
			retArr.push(args);
		return retArr;
	}
}

let ts = new tasks();
// let t1 = new TaskRunner(ts.task1, 50000);
// t1.start('ag','ag2','ag3');
// let t2 = new TaskRunner(ts.task2, 50000);
// t2.start('ag','ag2');
// let t3 = new TaskRunner(ts.task3, 50000);
// t3.start('ag');