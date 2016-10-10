const ds18b20 = require('ds18b20-raspi');

while(1) {

  ds18b20.readSimpleC(1, (err, temp) => {
    if (err) {
      console.log(err);
	  } else {
      console.log(`${temp} degC`);
    }
  })

}

  
