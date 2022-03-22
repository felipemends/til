fhand = open('D:/Dev/felpy/Chapter7/text.txt')
for line in fhand:
  line = line.rstrip()
  if not line.startswith('from') :
    continue
  print(line)