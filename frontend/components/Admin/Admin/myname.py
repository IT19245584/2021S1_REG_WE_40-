print("This program check if you are eligble for a bank loan or not")
salary = int(input("How much is your salary\n"))
if(salary>1000):
	amouunt = 200
	print("You are eligible to get a bank loan by paying $",amouunt,"monthly")
elif(salary==1000):
	amount = 500
	print("You are eligble to get a bank loan with higher monthly price $",amount,"monthly")
else:
	print("Sorry you are not eligble")