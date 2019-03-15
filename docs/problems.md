github article:

fuckups / what was fred luddy thinking


## fuck up 1
    for boolean (true/false) fields

    if checked
        gr.getValue('u_true_false') === '1'

    if not checked 
        gr.getValue('u_true_false') === '0'


    both are typeof 'string'



## fuck up 2
An empty list data type returns 'undefined'

