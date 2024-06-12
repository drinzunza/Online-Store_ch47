

name = "Sergio"
last = "Inzunza"

print(name)


## list
prices = [12, 32, 45.00, 43.23, 45.03]
print(prices)

print(prices[0])

total = 0
for price in prices:
    # print(price)
    total += price

print(total)


## dictionary
me = { 
    "name": "Sergio",
    "last": "Inzunza",
    "age": 38
}

print(me)

# read
print(me["name"])

# modify
me["age"] = 99

# add
me["email"] = "sinzunza@sdgku.edu"

print(me)


# opt 1 - Check
if "hobbies" in me:
    hobbies = me["hobbies"]
    print(hobbies)

# opt 2 - read or default
hob2 = me.get("hobbies", "NO HOBBIES")
print(hob2)


print("Should work")