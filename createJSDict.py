iteration = 1
with open("newDict.js", "w") as userDict:
    while True:
        userDict.write(str(iteration))
        userDict.write(":" + " '" + str(input()) + "'" + ",")
        userDict.write('\n')
        print("Do you want to continue? Y/N")

        if input() == "N":
            break
        else:
            print("Continue inputing")
            iteration += 1
