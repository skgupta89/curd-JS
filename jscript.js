


            // form valiedation

            // var name = document.getElementById('name').value;
            // var number = document.getElementById('number').value;
            // var email = document.getElementById('email').value;

            // var namePattern = / ^[a-zA-Z]{6,15}$/;
            // var numberPattern = / ^[6-9]{1}[0-9]{9}$/;
            // var namePattern = / ^[a-z0-9@._#$]{6-15}@{1}[a-z]{3-6}.{1}[a-z]{2-4}$/;

            // for name

            // if(name == ''){
            //     document.getElementById('nameError').innerHTML  ="*** Filed can't be empty***";
            // }
            // if(namePattern.match(name)){
               
            // }
            // else{
            //     document.getElementById('nameError').innerHTML  ="***please Enter Valid Name***";
            // }

        // for number

            // if(number == ''){
            //     document.getElementById('numberError').innerHTML  ="*** Filed can't be Empty***";
            // }

            // if(numberPattern.match(number)){
               
            // }
            // else{
            //     document.getElementById('numberError').innerHTML  ="***please Enter Valid Number***";
            // }

        // for email

            // if(email == ''){
            //     document.getElementById('emailError').innerHTML  ="*** Filed can't be Empty***";
            // }

            // if(emailPattern.match(email)){
                
            // }
            // else{
            //     document.getElementById('emailError').innerHTML  ="***please Enter Valid email***";
            // }



            var selectedRow = null;

            function onFormSubmit() {
              event.preventDefault();
              var formData = readData();
      
              if (selectedRow === null) {
                insertNewRecord(formData);
              } else {
                onUpdate(formData);
              }
              resetForm();
            }
      
            // read data from table
      
            function readData() {
              var dataObject = {};
      
              dataObject["Name"] = document.getElementById("name").value;
              dataObject["number"] = document.getElementById("number").value;
              dataObject["email"] = document.getElementById("email").value;
              return dataObject;
            }
      
            // inserting new record into table
      
            function insertNewRecord(data) {
              var table = document.getElementById("tbody"); // target tbody
              var insertRow = table.insertRow(table.length);
      
              // creating columns of td
      
              var cell1 = insertRow.insertCell(0);
              cell1.innerHTML = data.Name;
      
              var cell2 = insertRow.insertCell(1);
              cell2.innerHTML = data.number;
      
              var cell3 = insertRow.insertCell(2);
              cell3.innerHTML = data.email;
      
              var cell4 = insertRow.insertCell(3);
              cell4.innerHTML = `<button onclick = "onEdit(this)" class="btn btn-success">Edit<button>`;
      
              var cell5 = insertRow.insertCell(4);
              cell5.innerHTML = `<button onclick = "onDelete(this)" class="btn btn-danger">Delete<button>`;
            }
      
            // onEdit function`
      
            function onEdit(td) {
              selectedRow = td.parentElement.parentElement;
              document.getElementById("name").value = selectedRow.cells[0].innerHTML;
              document.getElementById("number").value =
                selectedRow.cells[1].innerHTML;
              document.getElementById("email").value = selectedRow.cells[2].innerHTML;
            }
      
            //on update function
      
            function onUpdate(formData) {
              selectedRow.cells[0].innerHTML = formData.Name;
              selectedRow.cells[1].innerHTML = formData.number;
              selectedRow.cells[2].innerHTML = formData.email;
            }
      
      
          // on delete function
      
          function onDelete(td){
              row = td.parentElement.parentElement;
      
              document.getElementById('dataList').deleteRow(row.rowIndex);
          }
      
      
            function resetForm() {
              document.getElementById("name").value = '';
              document.getElementById("number").value = '';
              document.getElementById("email").value = '';
            }
      