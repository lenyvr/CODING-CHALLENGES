function MatrixSpiral(strArr) { 

	// code goes here
	if(!validateInput(strArr)) return 'set a valid Array';
	
    const matrix= get2DMatrix(strArr);
    const totalElements = matrix.length*matrix[0].length;
    let rows = 0;
    let cols = 0;
    let direction = 1; //1-> right, 2-> down, 3->back, 4-> up
    let countTotal = 0;
    let resultEspiral = '';

	while (countTotal < totalElements) {
		switch (direction) {
			case 1:
				for (m = rows; m < matrix[0].length - cols; m++) {
					if (countTotal === 0) {
					  resultEspiral += matrix[rows][m];
					} else {
					  resultEspiral += ","+matrix[rows][m];
					}

					countTotal++;
				}
				direction++;
			break;

			case 2:
				for (m = rows + 1; m < matrix.length - rows; m++) {
					resultEspiral += ","+ matrix[m][matrix[0].length - 1 - cols];
					countTotal++;
				}
				direction++;
			break;

			case 3:
				for (m = matrix[0].length - 2 - cols; m >= cols; m--) {
					resultEspiral += ","+ matrix[matrix.length - 1 - rows][m];
					countTotal++;
				}
				direction++;
			break;

			case 4:
				for (m = matrix.length - 2 - rows; m >= rows + 1; m--) {
					resultEspiral += ","+ matrix[m][cols];
					countTotal++;
				}
				direction = 1;
				
				//increase rows and columns
				rows++;
				cols++;
			break;

			default:
				countTotal=totalElements+1;
			break;

		}

	}

  
  return resultEspiral; 
         
}

function get2DMatrix(input) {

  let columns;
  let row;
  const matrix = [];

  if(!validateInput(input)) return matrix;
  
  for (i = 0; i < input.length; i++) {

    if (input[i] === undefined || input[i] === null) continue;

     try {
      row = JSON.parse(input[i]); 
    } catch (e) {
        continue;
    }

    if (!validateInput(row)) continue;

    columns = columns || row.length;

    if (columns !== row.length) continue;

    matrix.push(row);
  }
  
  return matrix;
}
	
function validateInput(strArr){
	if(!Array.isArray(strArr) || strArr.length===0 ) return false;
	
	return true;
}

   
// keep this function call here 
MatrixSpiral(readline());
