local function debugPrint(msg)
    if true then -- set 'false' to disable all 'debugPrint'.
        print(msg)
    end
end

RegisterCommand('show:nui', function()
    SetNuiFocus(true, true)
    SendNUIMessage({ type = 'SHOW_PAGE' })
    debugPrint('Opened')
end)

RegisterCommand('hide:nui', function()
    SetNuiFocus(false, false)
    SendNUIMessage({ type = 'CLOSE_PAGE' })
    debugPrint('Closed')
end)

RegisterNUICallback('close', function(data, cb)
    SetNuiFocus(false, false)
    cb({})
end)
