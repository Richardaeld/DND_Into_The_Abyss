# import random number generator
import random

# iteration counter
iteration = 1
# open file to read to
Allloops = open('data.js', 'r')

# strip import variables of carrage return
# and return list without carrage return
loops = Allloops.readlines()
new = []
for removeReturn in loops:
    newItem = removeReturn.replace('\n', '')
    new += [newItem]
loops = new
print(loops)

# max times loop to run
max_step = 10

# for boolean and none type
alternate = -1

# Creation chef
chef = "asdfa@aol.com"

# open/create file to write to
with open('mongo_recipe_entery.js', 'w') as raccoon_chef:
    # creates ingredient and step lists
    for step in loops:

        # while recipeLoop:
        for looprange in range(0, max_step):

            # to give avatar none type
            if step.find("$") != -1:
                if iteration == 1:
                    stepAdd = step.replace("$", "")
                    raccoon_chef.write('const ' + stepAdd + ' = {\n')
                    raccoon_chef.write(str(iteration) + ': ' + '"' + chef + '"' + ',' + '\n')
                    iteration += 1
                    continue

                elif iteration == max_step:
                    raccoon_chef.write(str(iteration) + ': ' + '"' + chef + '"' + '\n' + '}\n\n')
                    iteration = 1
                    continue
                else:
                    raccoon_chef.write(str(iteration) + ': ' + '"' + chef + '"' + ',' + '\n')
                    iteration += 1
                    continue

            # to give avatar none type
            if step.find("*") != -1:
                if iteration == 1:
                    stepAdd = step.replace("*", "")
                    raccoon_chef.write('const ' + stepAdd + ' = {\n')
                    raccoon_chef.write(str(iteration) + ': ' + "None" + ',' + '\n')
                    iteration += 1
                    continue

                elif iteration == max_step:
                    raccoon_chef.write(str(iteration) + ': ' + "None" + '\n' + '}\n\n')
                    iteration = 1
                    continue
                else:
                    raccoon_chef.write(str(iteration) + ': ' + "None" + ',' + '\n')
                    iteration += 1
                    continue

            # to give grandparent and lazy boolean type
            if step.find("&") != -1:
                mkBool = random.randrange(1, 3)
                if mkBool == 1:
                    mkBool = True
                elif mkBool == 2:
                    mkBool = False
                else:
                    mkBool = None

                if iteration == 1:
                    stepAdd = step.replace("&", "")
                    raccoon_chef.write('const ' + stepAdd + ' = {\n')
                    raccoon_chef.write(str(iteration) + ': ' + str(mkBool) + ',' + '\n')
                    iteration += 1
                    continue

                elif iteration == max_step:
                    raccoon_chef.write(str(iteration) + ': ' + str(mkBool) + '\n' + '}\n\n')
                    iteration = 1
                    continue
                else:
                    raccoon_chef.write(str(iteration) + ': ' + str(mkBool) + ',' + '\n')
                    iteration += 1
                    continue

            # For standard list
            if iteration == 1:
                raccoon_chef.write('const ' + step + ' = {\n')
                raccoon_chef.write(str(iteration) + ': ' + '"' + 'some ' + step + ' ' + str(iteration) + '"' ',' + '\n')

            elif iteration == max_step:
                raccoon_chef.write(str(iteration) + ': ' + '"' + 'some ' + step + ' ' + str(iteration) + '"' + '\n' + '}\n\n')
                iteration = 1
                continue
            else:
                raccoon_chef.write(str(iteration) + ': ' + '"' + 'some ' + step + ' ' + str(iteration) + '"' ',' + '\n')

            iteration += 1

Allloops.close()
raccoon_chef.close()
