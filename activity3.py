print("Exercise 1:")
class Car:
    def initialize(self,name):
        self.data = name
        
car = Car()
car.initialize("Ford")

print(car.data)


print("Exercise 2:")
class Person:
    def __init__(self, name, age):
        if(type(name) != str):
            self.name = "No numbers allowed"
        else:
            self.name = name
        self.age = age
    def print_person(self):
        print(self.name)
        print(self.age)
        
p1 = Person("Camilo", 27)
p1.print_person()

print("Exercise 3:")
class Bicycle:
    def __init__(self, gear, speed, brakes):
        self.gear = gear
        self.speed = speed
        self.brakes = brakes
    def changeGearUp(self):
        