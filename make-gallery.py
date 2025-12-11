import os
import json


def makeGallery(path):
    images = []
    for filename in sorted(os.listdir(path)):
        print(filename)
        if filename.endswith(('.png', '.jpg', '.jpeg', '.gif')):
            file_path = os.path.join('/', path, filename)
            images.append(file_path)
    return images



befores = makeGallery('images/befores/')
afters = makeGallery('images/afters/')
others = makeGallery('images/other')

allImages = {
    "befores": befores,
    "afters": afters,
    "others": others
}

with open('images.json', 'w') as f:
    json.dump(allImages, f, indent=4)