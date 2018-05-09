_checkDaysAgo: function (date) {
		//take date to find today, yesterday, etc.
	    var now = gs.now() + ' 12:00:00';
	    date = date.substring(0, 10) + ' 12:00:00';

	    var nowDT = new GlideDateTime();
	    nowDT.setDisplayValue(now);
	    var dateDT = new GlideDateTime();
	    dateDT.setDisplayValue(date);
	    var seconds = gs.dateDiff(dateDT.getDisplayValue(), nowDT.getDisplayValue(), true);

	    var days = seconds / 60 / 60 / 24;

	    return days;
	}
