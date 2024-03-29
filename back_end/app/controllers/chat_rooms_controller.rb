class ChatRoomsController < ApplicationController

    def index
        chat_rooms = ChatRoom.all
        render json: chat_rooms
    end

   def create
        chat_room = ChatRoom.new(chat_room_params)
        if chat_room.save
            chat_room = ChatRoom.find(message.chat_room_id)
            ChatRoomChannel.broadcast_to(chat_room, message)
            # render json: chat_room
        else
            render json: {errors: game.errors.full_messages}, status: 422
        end
    end

    def show
        chat_room = ChatRoom.find(params[:id])
        render json: chat_room, include: [:messages]
    end

    private
        def chat_room_params
            params.require(:chat_room).permit(:name, :match_id)
        end

end
