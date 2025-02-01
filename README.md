# Error: listen EACCES: permission denied ::1:5173
Valószínűleg ugyanezen a porton még fut az előző változat. 
Ellerízd, hogy valóban így van-e:
```shell 
netstat -ano | findstr :5173
```
Adminként a PowerShell-ben ki tudod lőni:
```shell
taskkill /PID <PID> /F
```

