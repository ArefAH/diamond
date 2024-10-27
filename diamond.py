rows = int(input("Enter the number of rows: "))

for i in range(rows):
    for j in range(rows - i):
        print(" ", end="")
    for j in range(i* 2 + 1):
        print("*", end="")
    print()

for i in range(rows):
    for j in range(i + 2):
        print(" ", end="")
    for j in range(2 * (rows - i - 1) - 1):
        print("*", end="")
    print()