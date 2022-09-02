
def changeKeyName(items, name, change):
    for item in items:
        item[change] = item.pop(name)
    return items