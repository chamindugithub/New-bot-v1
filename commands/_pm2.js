/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

//---------------------------------------------------------------------------
const Secktor = require('../lib')
Secktor.cmd({
        pattern: "restart",
        desc: "To restart bot",
        category: "tools",
    },
    async(Void, citel,{isCreator}) => {
   if (!isCreator) return citel.reply(tlang().owner)
            const { exec } = require("child_process")
            exec('pm2 restart secktor')
    }
);
