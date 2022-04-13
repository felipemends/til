contagem = dict()
print('Coloque um texto aqui: ')
linhas = input('')

palavras = linhas.split()

print('Palavras:', palavras)

print('Contando...')
for palavra in palavras:
    contagem[palavra] = contagem.get(palavra, 0) + 1
print('Contagem é:', contagem)
